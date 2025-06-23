export const ASSET_CONSTANTS = {
    PAGE_TITLE: "Asset Management Dashboard",
    TABLE_HEADERS: [
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Type", key: "type" },
        { label: "Status", key: "status" },
        { label: "Assigned To", key: "assignedTo" }
    ],
    STATUS_COLORS: {
        Active: "bg-green-100 text-green-800",
        Inactive: "bg-gray-100 text-gray-600"
    },
    EMPTY_STATE_MESSAGE: "No assets found.",
    ACTIONS: {
        ADD: "Add Asset",
        EDIT: "Edit Asset",
        DELETE: "Delete Asset"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search assets...",
        TYPE_FILTER: "Filter by type",
        STATUS_FILTER: "Filter by status"
    },
    SORT_OPTIONS: [
        { label: "Sort by Name", value: "name" },
        { label: "Sort by Type", value: "type" },
        { label: "Sort by Status", value: "status" },
        { label: "Sort by Assigned To", value: "assignedTo" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        ASSET_ADDED: "Asset added successfully.",
        ASSET_UPDATED: "Asset updated successfully.",
        ASSET_DELETED: "Asset deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};


export const ASSETS_DATA = [
    { id: 1, name: "Laptop", type: "Electronics", status: "Active", assignedTo: "John Doe" },
    { id: 2, name: "Office Chair", type: "Furniture", status: "Inactive", assignedTo: "Jane Smith" },
    { id: 3, name: "Projector", type: "Electronics", status: "Active", assignedTo: "Meeting Room" },
    { id: 4, name: "Printer", type: "Electronics", status: "Active", assignedTo: "Office" },
    { id: 5, name: "Desk", type: "Furniture", status: "Inactive", assignedTo: "Storage" },
    { id: 6, name: "Server Rack", type: "Electronics", status: "Active", assignedTo: "IT Department" },
    { id: 7, name: "Whiteboard", type: "Furniture", status: "Active", assignedTo: "Conference Room" },
    { id: 8, name: "Scanner", type: "Electronics", status: "Inactive", assignedTo: "Office" },
    { id: 9, name: "Television", type: "Electronics", status: "Active", assignedTo: "Break Room" },
    { id: 10, name: "File Cabinet", type: "Furniture", status: "Inactive", assignedTo: "Storage Room" },
    { id: 11, name: "Network Switch", type: "Electronics", status: "Active", assignedTo: "IT Department" },
    { id: 12, name: "Projector Screen", type: "Furniture", status: "Active", assignedTo: "Conference Room" },
    { id: 13, name: "Air Conditioner", type: "Electronics", status: "Active", assignedTo: "Office" },
    { id: 14, name: "Coffee Machine", type: "Electronics", status: "Active", assignedTo: "Break Room" },
    { id: 15, name: "Whiteboard Markers", type: "Supplies", status: "Active", assignedTo: "Conference Room" },
    { id: 16, name: "Projector Remote", type: "Electronics", status: "Active", assignedTo: "Conference Room" },
    { id: 17, name: "Laptop Stand", type: "Accessories", status: "Inactive", assignedTo: "Storage" },
    { id: 18, name: "Keyboard", type: "Accessories", status: "Active", assignedTo: "John Doe" },
    { id: 19, name: "Mouse", type: "Accessories", status: "Active", assignedTo: "Jane Smith" },
    { id: 20, name: "Headphones", type: "Accessories", status: "Inactive", assignedTo: "Storage" },
    { id: 21, name: "Webcam", type: "Electronics", status: "Active", assignedTo: "John Doe" },
    { id: 22, name: "Microphone", type: "Electronics", status: "Active", assignedTo: "Conference Room" },
    { id: 23, name: "Router", type: "Electronics", status: "Active", assignedTo: "IT Department" },
    { id: 24, name: "Switchboard", type: "Electronics", status: "Inactive", assignedTo: "Storage" },
    { id: 25, name: "Smartphone", type: "Electronics", status: "Active", assignedTo: "Jane Smith" },
    { id: 26, name: "Tablet", type: "Electronics", status: "Active", assignedTo: "John Doe" },
    { id: 27, name: "External Hard Drive", type: "Electronics", status: "Inactive", assignedTo: "Storage" },
    { id: 28, name: "USB Hub", type: "Accessories", status: "Active", assignedTo: "Office" },
    { id: 29, name: "Charging Station", type: "Electronics", status: "Active", assignedTo: "Break Room" },
    { id: 30, name: "Smart Speaker", type: "Electronics", status: "Active", assignedTo: "Conference Room" },
    { id: 31, name: "Digital Signage", type: "Electronics", status: "Active", assignedTo: "Lobby" },
    { id: 32, name: "Security Camera", type: "Electronics", status: "Active", assignedTo: "Office" },
    { id: 33, name: "Fire Extinguisher", type: "Safety Equipment", status: "Active", assignedTo: "Storage" },
    { id: 34, name: "First Aid Kit", type: "Safety Equipment", status: "Active", assignedTo: "Break Room" },
    { id: 35, name: "Whiteboard Eraser", type: "Supplies", status: "Active", assignedTo: "Conference Room" },
    { id: 36, name: "Stapler", type: "Supplies", status: "Active", assignedTo: "Office" },
    { id: 37, name: "Paper Shredder", type: "Electronics", status: "Inactive", assignedTo: "Storage" },
    { id: 38, name: "Project Management Software License", type: "Software", status: "Active", assignedTo: "IT Department" },
    { id: 39, name: "Accounting Software License", type: "Software", status: "Active", assignedTo: "Finance Department" },
    { id: 40, name: "CRM Software License", type: "Software", status: "Active", assignedTo: "Sales Department" },
    { id: 41, name: "Design Software License", type: "Software", status: "Active", assignedTo: "Marketing Department" },
    { id: 42, name: "Video Conferencing Software License", type: "Software", status: "Active", assignedTo: "All Departments" },
    { id: 43, name: "Antivirus Software License", type: "Software", status: "Active", assignedTo: "IT Department" },
    { id: 44, name: "Cloud Storage Subscription", type: "Service", status: "Active", assignedTo: "IT Department" },
    { id: 45, name: "Internet Service Subscription", type: "Service", status: "Active", assignedTo: "Office" },
    { id: 46, name: "Office Supplies Subscription", type: "Service", status: "Active", assignedTo: "Office" },
    { id: 47, name: "Maintenance Service Contract", type: "Service", status: "Active", assignedTo: "Facilities Department" },
    { id: 48, name: "Security Service Contract", type: "Service", status: "Active", assignedTo: "Security Department" },
    { id: 49, name: "Cleaning Service Contract", type: "Service", status: "Active", assignedTo: "Facilities Department" },
    { id: 50, name: "Catering Service Contract", type: "Service", status: "Active", assignedTo: "Break Room" },
    { id: 51, name: "Event Management Software License", type: "Software", status: "Active", assignedTo: "Events Department" },
    { id: 52, name: "HR Management Software License", type: "Software", status: "Active", assignedTo: "HR Department" },
    { id: 53, name: "Training Software License", type: "Software", status: "Active", assignedTo: "HR Department" },
    { id: 54, name: "Collaboration Software License", type: "Software", status: "Active", assignedTo: "All Departments" },
    { id: 55, name: "Backup Service Subscription", type: "Service", status: "Active", assignedTo: "IT Department" },
    { id: 56, name: "VPN Service Subscription", type: "Service", status: "Active", assignedTo: "IT Department" },
    { id: 57, name: "Email Service Subscription", type: "Service", status: "Active", assignedTo: "All Departments" },
    { id: 58, name: "Website Hosting Service Subscription", type: "Service", status: "Active", assignedTo: "Marketing Department" },
    { id: 59, name: "Domain Name Registration", type: "Service", status: "Active", assignedTo: "Marketing Department" },
    { id: 60, name: "Graphic Design Software License", type: "Software", status: "Active", assignedTo: "Design Department" },
    { id: 61, name: "Video Editing Software License", type: "Software", status: "Active", assignedTo: "Media Department" },
    { id: 62, name: "Audio Editing Software License", type: "Software", status: "Active", assignedTo: "Media Department" },
    { id: 63, name: "Social Media Management Software License", type: "Software", status: "Active", assignedTo: "Marketing Department" },
    { id: 64, name: "SEO Tools Subscription", type: "Service", status: "Active", assignedTo: "Marketing Department" },
    { id: 65, name: "Analytics Tools Subscription", type: "Service", status: "Active", assignedTo: "All Departments" },
    { id: 66, name: "Customer Support Software License", type: "Software", status: "Active", assignedTo: "Support Department" },
    { id: 67, name: "Help Desk Software License", type: "Software", status: "Active", assignedTo: "Support Department" },
    { id: 68, name: "Knowledge Base Software License", type: "Software", status: "Active", assignedTo: "Support Department" },
    { id: 69, name: "Feedback Management Software License", type: "Software", status: "Active", assignedTo: "Support Department" },
    { id: 70, name: "Survey Tools Subscription", type: "Service", status: "Active", assignedTo: "Support Department" }

];