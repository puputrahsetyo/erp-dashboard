export const PROJECTS_CONSTANTS = {
    PAGE_TITLE: "Project Management Dashboard",
    TABLE_HEADERS: [
        { label: "Project Name", key: "name" },
        { label: "Status", key: "status" },
        { label: "Manager", key: "manager" },
        { label: "Due Date", key: "dueDate" }
    ],
    STATUS_COLORS: {
        "Not Started": "bg-gray-100 text-gray-800",
        "In Progress": "bg-blue-100 text-blue-800",
        "Completed": "bg-green-100 text-green-800",
        "On Hold": "bg-yellow-100 text-yellow-800"
    },
    EMPTY_STATE_MESSAGE: "No projects found.",
    ACTIONS: {
        ADD_PROJECT: "Add Project",
        EDIT_PROJECT: "Edit Project",
        DELETE_PROJECT: "Delete Project"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search projects...",
        STATUS_FILTER: "Filter by status",
        DATE_RANGE: "Select date range"
    },
    SORT_OPTIONS: [
        { label: "Sort by Name", value: "name" },
        { label: "Sort by Status", value: "status" },
        { label: "Sort by Manager", value: "manager" },
        { label: "Sort by Due Date", value: "dueDate" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        PROJECT_ADDED: "Project added successfully.",
        PROJECT_UPDATED: "Project updated successfully.",
        PROJECT_DELETED: "Project deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};

export const PROJECTS_DATA = [
    { id: 1, name: "Website Redesign", status: "In Progress", manager: "Alice Johnson", dueDate: "2024-09-15" },
    { id: 2, name: "Mobile App Development", status: "Not Started", manager: "Bob Smith", dueDate: "2024-10-01" },
    { id: 3, name: "Marketing Campaign", status: "Completed", manager: "Charlie Brown", dueDate: "2024-08-20" },
    { id: 4, name: "Product Launch", status: "On Hold", manager: "Diana Prince", dueDate: "2024-11-05" },
    { id: 5, name: "Database Migration", status: "In Progress", manager: "Ethan Hunt", dueDate: "2024-09-30" },
    { id: 6, name: "Cloud Infrastructure Setup", status: "Not Started", manager: "Fiona Gallagher", dueDate: "2024-12-01" },
    { id: 7, name: "AI Integration Project", status: "Completed", manager: "George Costanza", dueDate: "2024-07-15" },
    { id: 8, name: "Security Audit", status: "On Hold", manager: "Hannah Baker", dueDate: "2024-10-20" },
    { id: 9, name: "Customer Feedback System", status: "In Progress", manager: "Ian Malcolm", dueDate: "2024-08-30" },
    { id: 10, name: "Supply Chain Optimization", status: "Not Started", manager: "Jane Doe", dueDate: "2024-11-15" },
    { id: 11, name: "E-commerce Platform Upgrade", status: "Completed", manager: "Kevin Hart", dueDate: "2024-07-25" },
    { id: 12, name: "HR Management System", status: "On Hold", manager: "Laura Croft", dueDate: "2024-09-10" },
    { id: 13, name: "Data Analytics Project", status: "In Progress", manager: "Mike Wazowski", dueDate: "2024-08-05" },
    { id: 14, name: "Content Management System", status: "Not Started", manager: "Nina Simone", dueDate: "2024-10-30" },
    { id: 15, name: "IT Infrastructure Upgrade", status: "Completed", manager: "Oscar Isaac", dueDate: "2024-06-20" },
    { id: 16, name: "Customer Relationship Management", status: "On Hold", manager: "Paula Patton", dueDate: "2024-12-15" },
    { id: 17, name: "Business Intelligence Dashboard", status: "In Progress", manager: "Quentin Tarantino", dueDate: "2024-09-05" },
    { id: 18, name: "Social Media Strategy", status: "Not Started", manager: "Rachel Green", dueDate: "2024-11-25" },
    { id: 19, name: "Financial Reporting System", status: "Completed", manager: "Sam Wilson", dueDate: "2024-07-30" },
    { id: 20, name: "Compliance Management System", status: "On Hold", manager: "Tina Fey", dueDate: "2024-10-10" },
    { id: 21, name: "Inventory Management System", status: "In Progress", manager: "Ursula K. Le Guin", dueDate: "2024-08-15" },
    { id: 22, name: "Project Management Tool", status: "Not Started", manager: "Victor Hugo", dueDate: "2024-12-20" },
    { id: 23, name: "Customer Support Portal", status: "Completed", manager: "Winston Churchill", dueDate: "2024-06-30" },
    { id: 24, name: "Sales Automation System", status: "On Hold", manager: "Xena Warrior Princess", dueDate: "2024-09-25" },
    { id: 25, name: "Training and Development Program", status: "In Progress", manager: "Yoda Skywalker", dueDate: "2024-08-25" }
];
