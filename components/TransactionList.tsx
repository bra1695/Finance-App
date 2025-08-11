'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// Import your transaction data
import transactionsData from "@/public/transactions.json"; // Save your JSON here

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

const PAGE_SIZE = 10;


export default function TransactionList(){
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("latest");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    
    // Parse and prepare data
    const transactions: Transaction[] = transactionsData;

      // Filter by search query
  const filtered = transactions.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

      // Filter by category
    const categorized = categoryFilter === "All" 
    ? filtered 
    : filtered.filter(t => t.category === categoryFilter);

      // Sort
    const sorted = [...categorized].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (sortOption === "latest") return dateB - dateA;
    if (sortOption === "oldest") return dateA - dateB;
    if (sortOption === "amount") return Math.abs(b.amount) - Math.abs(a.amount);
    return 0;
    });
      // Pagination
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginated = sorted.slice(startIndex, startIndex + PAGE_SIZE);

  // Get unique categories for filter dropdown
  const categories = ["All", ...Array.from(new Set(transactions.map(t => t.category)))];
    return(

        <div className="bg-white rounded-2xl p-4 ">
              {/* Controls */}
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                <div className="flex-1 max-w-sm">
                  <Input
                    placeholder="Search by name or category..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                <Select value={sortOption} onValueChange={(value: any) => {
                  setSortOption(value);
                  setCurrentPage(1);
                }}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="amount">Amount</SelectItem>
                  </SelectContent>
                </Select>
        
                <Select value={categoryFilter} onValueChange={(value: any) => {
                  setCategoryFilter(value);
                  setCurrentPage(1);
                }}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
        
              </div>
                    {/* Transaction Table */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Recipient / Sender</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginated.length > 0 ? (
                      paginated.map((t, i) => {
                        const isIncome = t.amount > 0;
                        const formattedDate = new Date(t.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        });
                        const formattedAmount = new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(Math.abs(t.amount));
        
                        return (
                          <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                            <TableCell className="flex items-center gap-3 py-4">
                              <Image
                                src={t.avatar.replace("./public", "")}
                                alt={t.name}
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                              />
                              <div>
                                <p className="font-medium">{t.name}</p>
                                {t.recurring && (
                                  <Badge variant="secondary" className="text-xs mt-1">
                                    Recurring
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-normal">
                                {t.category}
                              </Badge>
                            </TableCell>
                            <TableCell>{formattedDate}</TableCell>
                            <TableCell className="text-right">
                              <span className={isIncome ? "text-green-600" : "text-red-600"}>
                                {isIncome ? "+" : "-"}
                                {formattedAmount}
                              </span>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                          No transactions found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
                    {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-between items-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage <= 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage >= totalPages}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
        </div>
    );
}