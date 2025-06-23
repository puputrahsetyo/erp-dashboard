export const INVENTORY_CONSTANTS = {
    PAGE_TITLE: "Inventory Management",
    TABLE_HEADERS: [
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Category", key: "category" },
        { label: "Quantity", key: "quantity" },
        { label: "Status", key: "status" }
    ],
    STATUS_COLORS: {
        "In Stock": "bg-green-100 text-green-800",
        "Low Stock": "bg-yellow-100 text-yellow-800",
        "Out of Stock": "bg-red-100 text-red-800"
    },
    EMPTY_STATE_MESSAGE: "No inventory items found.",
    ACTIONS: {
        ADD: "Add Item",
        EDIT: "Edit Item",
        DELETE: "Delete Item"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search inventory...",
        CATEGORY_FILTER: "Filter by category",
        STATUS_FILTER: "Filter by status"
    },
    SORT_OPTIONS: [
        { label: "Sort by Name", value: "name" },
        { label: "Sort by Quantity", value: "quantity" },
        { label: "Sort by Status", value: "status" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        ITEM_ADDED: "Item added successfully.",
        ITEM_UPDATED: "Item updated successfully.",
        ITEM_DELETED: "Item deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};

export const INVENTORY_DATA = [
    { id: 1, name: "Laptop", category: "Electronics", quantity: 50, status: "In Stock" },
    { id: 2, name: "Office Chair", category: "Furniture", quantity: 20, status: "Low Stock" },
    { id: 3, name: "Printer", category: "Electronics", quantity: 0, status: "Out of Stock" },
    { id: 4, name: "Desk", category: "Furniture", quantity: 15, status: "In Stock" },
    { id: 5, name: "Projector", category: "Electronics", quantity: 10, status: "In Stock" },
    { id: 6, name: "Whiteboard", category: "Office Supplies", quantity: 5, status: "Low Stock" },
    { id: 7, name: "Smartphone", category: "Electronics", quantity: 30, status: "In Stock" },
    { id: 8, name: "Tablet", category: "Electronics", quantity: 25, status: "In Stock" },
    { id: 9, name: "Headphones", category: "Accessories", quantity: 40, status: "In Stock" },
    { id: 10, name: "Keyboard", category: "Accessories", quantity: 60, status: "In Stock" },
    { id: 11, name: "Mouse", category: "Accessories", quantity: 70, status: "In Stock" },
    { id: 12, name: "Monitor", category: "Electronics", quantity: 35, status: "In Stock" },
    { id: 13, name: "Network Switch", category: "Networking", quantity: 5, status: "Low Stock" },
    { id: 14, name: "Router", category: "Networking", quantity: 8, status: "Low Stock" },
    { id: 15, name: "Server Rack", category: "Hardware", quantity: 2, status: "In Stock" },
    { id: 16, name: "External Hard Drive", category: "Storage", quantity: 12, status: "In Stock" },
    { id: 17, name: "USB Hub", category: "Accessories", quantity: 18, status: "In Stock" },
    { id: 18, name: "Charging Cable", category: "Accessories", quantity: 100, status: "In Stock" },
    { id: 19, name: "Power Bank", category: "Accessories", quantity: 30, status: "In Stock" },
    { id: 20, name: "Webcam", category: "Electronics", quantity: 25, status: "In Stock" },
    { id: 21, name: "Microphone", category: "Electronics", quantity: 15, status: "In Stock" },
    { id: 22, name: "Speaker", category: "Electronics", quantity: 20, status: "In Stock" },
    { id: 23, name: "Projector Screen", category: "Office Supplies", quantity: 8, status: "Low Stock" },
    { id: 24, name: "Whiteboard Markers", category: "Office Supplies", quantity: 50, status: "In Stock" },
    { id: 25, name: "Sticky Notes", category: "Office Supplies", quantity: 200, status: "In Stock" }
];
export const INVENTORY_CATEGORIES = [
    "Electronics",
    "Furniture",
    "Office Supplies",
    "Networking",
    "Hardware",
    "Storage",
    "Accessories"
];
export const INVENTORY_STATUS = ["In Stock", "Low Stock", "Out of Stock"];