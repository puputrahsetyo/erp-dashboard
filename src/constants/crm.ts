export const CRM_CONSTANTS = {
    PAGE_TITLE: "Customer Relationship Management",
    TABLE_HEADERS: [
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Status", key: "status" }
    ],
    STATUS_COLORS: {
        Active: "bg-green-100 text-green-800",
        Inactive: "bg-gray-100 text-gray-600",
        Prospect: "bg-blue-100 text-blue-800"
    },
    EMPTY_STATE_MESSAGE: "No customers found.",
    ACTIONS: {
        ADD: "Add Customer",
        EDIT: "Edit Customer",
        DELETE: "Delete Customer"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search customers...",
        STATUS_FILTER: "Filter by status"
    },
    SORT_OPTIONS: [
        { label: "Sort by Name", value: "name" },
        { label: "Sort by Email", value: "email" },
        { label: "Sort by Phone", value: "phone" },
        { label: "Sort by Status", value: "status" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        CUSTOMER_ADDED: "Customer added successfully.",
        CUSTOMER_UPDATED: "Customer updated successfully.",
        CUSTOMER_DELETED: "Customer deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};
export const CRM_DATA = [
    { id: 1, name: "Alice Johnson", email: "alice@mail.com", phone: "123-456-7890", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@mail.com", phone: "234-567-8901", status: "Inactive" },
    { id: 3, name: "Charlie Brown", email: "ch@mail.com", phone: "345-678-9012", status: "Prospect" },
    { id: 4, name: "Diana Prince", email: "diana@mail.com", phone: "456-789-0123", status: "Active" },
    { id: 5, name: "Ethan Hunt", email: "ethan@mail.com", phone: "567-890-1234", status: "Inactive" },
    { id: 6, name: "Fiona Gallagher", email: "fiona@mail.com", phone: "678-901-2345", status: "Prospect" },
    { id: 7, name: "George Costanza", email: "george@mail.com", phone: "789-012-3456", status: "Active" },
    { id: 8, name: "Hannah Baker", email: "hannah@mail.com", phone: "890-123-4567", status: "Inactive" },
]

export const CRM_RECENT_ACTIVITY = [
    { id: 1, activity: "Called Alice Johnson", date: "2024-09-01" },
    { id: 2, activity: "Sent email to Bob Smith", date: "2024-09-02" },
    { id: 3, activity: "Followed up with Charlie Brown", date: "2024-09-03" },
    { id: 4, activity: "Scheduled meeting with Diana Prince", date: "2024-09-04" },
    { id: 5, activity: "Updated contact details for Ethan Hunt", date: "2024-09-05" },
    { id: 6, activity: "Reviewed feedback from Fiona Gallagher", date: "2024-09-06" },
    { id: 7, activity: "Sent proposal to George Costanza", date: "2024-09-07" },
    { id: 8, activity: "Called Hannah Baker", date: "2024-09-08" },
    { id: 9, activity: "Followed up with Alice Johnson", date: "2024-09-09" },
    { id: 10, activity: "Sent newsletter to all customers", date: "2024-09-10" }
];
export const CRM_CUSTOMER_DETAILS = {
    id: 1,
    name: "Alice Johnson",
    email: "",
    phone: "123-456-7890",
    status: "Active",
    address: "123 Main St, Springfield, USA",
    notes: "Alice is a long-term customer with a high engagement level.",
    recentActivities: [
        { id: 1, activity: "Called Alice Johnson", date: "2024-09-01" },
        { id: 2, activity: "Sent email to Alice Johnson", date: "2024-09-02" }
    ]
};
export const CRM_CUSTOMER_STATISTICS = {
    leads: 150,
    opportunities: 75,
    closedDeals: 30,
};
