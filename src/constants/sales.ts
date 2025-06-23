export const SALES_CONSTANTS = {
    PAGE_TITLE: "Sales Management",
    TABLE_HEADERS: [
        { label: "Order ID", key: "orderId" },
        { label: "Customer Name", key: "customerName" },
        { label: "Product", key: "product" },
        { label: "Quantity", key: "quantity" },
        { label: "Total Price ($)", key: "totalPrice" },
        { label: "Status", key: "status" }
    ],
    STATUS_COLORS: {
        "Pending": "bg-yellow-100 text-yellow-800",
        "Completed": "bg-green-100 text-green-800",
        "Cancelled": "bg-red-100 text-red-800"
    },
    EMPTY_STATE_MESSAGE: "No sales orders found.",
    ACTIONS: {
        ADD_ORDER: "Add Order",
        EDIT_ORDER: "Edit Order",
        DELETE_ORDER: "Delete Order"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search orders...",
        STATUS_FILTER: "Filter by status",
        DATE_RANGE: "Select date range"
    },
    SORT_OPTIONS: [
        { label: "Sort by Order ID", value: "orderId" },
        { label: "Sort by Customer Name", value: "customerName" },
        { label: "Sort by Product", value: "product" },
        { label: "Sort by Quantity", value: "quantity" },
        { label: "Sort by Total Price", value: "totalPrice" },
        { label: "Sort by Status", value: "status" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        ORDER_ADDED: "Order added successfully.",
        ORDER_UPDATED: "Order updated successfully.",
        ORDER_DELETED: "Order deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};
export const SALES_DATA = [
    { orderId: "SO-001", customerName: "Alice Johnson", product: "Laptop", quantity: 2, totalPrice: 2000, status: "Completed" },
    { orderId: "SO-002", customerName: "Bob Smith", product: "Smartphone", quantity: 1, totalPrice: 800, status: "Pending" },
    { orderId: "SO-003", customerName: "Charlie Brown", product: "Tablet", quantity: 3, totalPrice: 1200, status: "Completed" },
    { orderId: "SO-004", customerName: "Diana Prince", product: "Headphones", quantity: 5, totalPrice: 500, status: "Cancelled" },
    { orderId: "SO-005", customerName: "Ethan Hunt", product: "Monitor", quantity: 1, totalPrice: 300, status: "Pending" },
    { orderId: "SO-006", customerName: "Fiona Gallagher", product: "Keyboard", quantity: 4, totalPrice: 200, status: "Completed" },
    { orderId: "SO-007", customerName: "George Costanza", product: "Mouse", quantity: 6, totalPrice: 180, status: "Completed" },
    { orderId: "SO-008", customerName: "Hannah Baker", product: "Printer", quantity: 2, totalPrice: 400, status: "Pending" },
    { orderId: "SO-009", customerName: "Ian Malcolm", product: "Desk Chair", quantity: 3, totalPrice: 450, status: "Completed" },
    { orderId: "SO-010", customerName: "Jane Doe", product: "Office Desk", quantity: 1, totalPrice: 700, status: "Cancelled" },
    { orderId: "SO-011", customerName: "Kevin Hart", product: "Webcam", quantity: 2, totalPrice: 160, status: "Completed" },
    { orderId: "SO-012", customerName: "Laura Croft", product: "Microphone", quantity: 1, totalPrice: 120, status: "Pending" },
    { orderId: "SO-013", customerName: "Mike Wazowski", product: "External Hard Drive", quantity: 2, totalPrice: 240, status: "Completed" },
    { orderId: "SO-014", customerName: "Nina Simone", product: "Network Switch", quantity: 1, totalPrice: 150, status: "Cancelled" },
    { orderId: "SO-015", customerName: "Oscar Isaac", product: "Router", quantity: 1, totalPrice: 100, status: "Pending" },
    { orderId: "SO-016", customerName: "Paul Atreides", product: "Smartwatch", quantity: 2, totalPrice: 600, status: "Completed" },
    { orderId: "SO-017", customerName: "Quinn Fabray", product: "Bluetooth Speaker", quantity: 3, totalPrice: 270, status: "Pending" },
    { orderId: "SO-018", customerName: "Rachel Green", product: "Gaming Console", quantity: 1, totalPrice: 500, status: "Completed" },
    { orderId: "SO-019", customerName: "Sam Winchester", product: "VR Headset", quantity: 2, totalPrice: 800, status: "Cancelled" },
    { orderId: "SO-020", customerName: "Tina Belcher", product: "Action Camera", quantity: 1, totalPrice: 350, status: "Pending" }
];