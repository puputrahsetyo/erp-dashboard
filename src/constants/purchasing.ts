export const PURCHASING_CONSTANTS = {
    PAGE_TITLE: "Purchasing Management",
    TABLE_HEADERS: [
        { label: "ID", key: "id" },
        { label: "Supplier", key: "supplier" },
        { label: "Item", key: "item" },
        { label: "Quantity", key: "quantity" },
        { label: "Total Cost", key: "totalCost" },
        { label: "Status", key: "status" }
    ],
    STATUS_COLORS: {
        Pending: "bg-yellow-100 text-yellow-800",
        Approved: "bg-green-100 text-green-800",
        Rejected: "bg-red-100 text-red-800"
    },
    EMPTY_STATE_MESSAGE: "No purchase orders found.",
    ACTIONS: {
        ADD_ORDER: "Add Purchase Order",
        EDIT_ORDER: "Edit Purchase Order",
        DELETE_ORDER: "Delete Purchase Order"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search purchase orders...",
        STATUS_FILTER: "Filter by status",
        DATE_RANGE: "Select date range"
    },
    SORT_OPTIONS: [
        { label: "Sort by ID", value: "id" },
        { label: "Sort by Supplier", value: "supplier" },
        { label: "Sort by Item", value: "item" },
        { label: "Sort by Quantity", value: "quantity" },
        { label: "Sort by Total Cost", value: "totalCost" },
        { label: "Sort by Status", value: "status" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        ORDER_ADDED: "Purchase order added successfully.",
        ORDER_UPDATED: "Purchase order updated successfully.",
        ORDER_DELETED: "Purchase order deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};
export const PURCHASING_DATA = [
    { id: 1, supplier: "Supplier A", item: "Laptop", quantity: 10, totalCost: 10000, status: "Approved" },
    { id: 2, supplier: "Supplier B", item: "Office Chair", quantity: 20, totalCost: 2000, status: "Pending" },
    { id: 3, supplier: "Supplier C", item: "Printer", quantity: 5, totalCost: 1500, status: "Rejected" },
    { id: 4, supplier: "Supplier D", item: "Desk", quantity: 15, totalCost: 3000, status: "Approved" },
    { id: 5, supplier: "Supplier E", item: "Projector", quantity: 8, totalCost: 4000, status: "Pending" },
    { id: 6, supplier: "Supplier F", item: "Whiteboard", quantity: 12, totalCost: 600, status: "Approved" },
    { id: 7, supplier: "Supplier G", item: "Smartphone", quantity: 30, totalCost: 15000, status: "Pending" },
    { id: 8, supplier: "Supplier H", item: "Tablet", quantity: 25, totalCost: 5000, status: "Approved" },
    { id: 9, supplier: "Supplier I", item: "Headphones", quantity: 40, totalCost: 8000, status: "Rejected" },
    { id: 10, supplier: "Supplier J", item: "Keyboard", quantity: 60, totalCost: 1200, status: "Approved" },
    { id: 11, supplier: "Supplier K", item: "Mouse", quantity: 70, totalCost: 1400, status: "Pending" },
    { id: 12, supplier: "Supplier L", item: "Monitor", quantity: 35, totalCost: 7000, status: "Approved" },
    { id: 13, supplier: "Supplier M", item: "Network Switch", quantity: 5, totalCost: 2500, status: "Pending" },
    { id: 14, supplier: "Supplier N", item: "Router", quantity: 8, totalCost: 1600, status: "Approved" },
    { id: 15, supplier: "Supplier O", item: "Server Rack", quantity: 2, totalCost: 8000, status: "Rejected" },
    { id: 16, supplier: "Supplier P", item: "External Hard Drive", quantity: 12, totalCost: 2400, status: "Approved" },
    { id: 17, supplier: "Supplier Q", item: "Office Supplies", quantity: 100, totalCost: 500, status: "Pending" },
    { id: 18, supplier: "Supplier R", item: "Coffee Machine", quantity: 3, totalCost: 900, status: "Approved" },
    { id: 19, supplier: "Supplier S", item: "Air Conditioner", quantity: 2, totalCost: 2000, status: "Rejected" },
    { id: 20, supplier: "Supplier T", item: "Projector Screen", quantity: 4, totalCost: 800, status: "Approved" }
];