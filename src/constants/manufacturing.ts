export const MANUFACTURING_CONSTANTS = {
    PAGE_TITLE: "Manufacturing Dashboard",
    STATISTICS: {
        TOTAL_WORK_ORDERS: "Total Work Orders",
        COMPLETED_WORK_ORDERS: "Completed Work Orders",
        PRODUCTION_EFFICIENCY: "Production Efficiency",
        MACHINE_DOWNTIME: "Machine Downtime"
    },
    STATISTICS_COLORS: {
        TOTAL_WORK_ORDERS: "text-gray-800",
        COMPLETED_WORK_ORDERS: "text-green-600",
        PRODUCTION_EFFICIENCY: "text-blue-600",
        MACHINE_DOWNTIME: "text-red-600"
    },
    TABLE_HEADERS: [
        { label: "Order ID", key: "orderId" },
        { label: "Product", key: "product" },
        { label: "Status", key: "status" },
        { label: "Due Date", key: "dueDate" }
    ],
    STATUS_COLORS: {
        "In Progress": "bg-blue-100 text-blue-700",
        "Completed": "bg-green-100 text-green-700",
        "Pending": "bg-yellow-100 text-yellow-700"
    },
    EMPTY_STATE_MESSAGE: "No work orders found.",
    ACTIONS: {
        ADD_WORK_ORDER: "Add Work Order",
        EDIT_WORK_ORDER: "Edit Work Order",
        DELETE_WORK_ORDER: "Delete Work Order"
    },
    FILTERS: {
        SEARCH_PLACEHOLDER: "Search work orders...",
        STATUS_FILTER: "Filter by status",
        DATE_RANGE: "Select date range"
    },
    SORT_OPTIONS: [
        { label: "Sort by Order ID", value: "orderId" },
        { label: "Sort by Product", value: "product" },
        { label: "Sort by Status", value: "status" },
        { label: "Sort by Due Date", value: "dueDate" }
    ],
    PAGINATION: {
        ITEMS_PER_PAGE: 10,
        NEXT: "Next",
        PREVIOUS: "Previous"
    },
    NOTIFICATIONS: {
        WORK_ORDER_ADDED: "Work order added successfully.",
        WORK_ORDER_UPDATED: "Work order updated successfully.",
        WORK_ORDER_DELETED: "Work order deleted successfully.",
        ERROR: "An error occurred. Please try again."
    }
};
export const MANUFACTURING_DATA = [
    { orderId: "WO-00123", product: "Widget A", status: "In Progress", dueDate: "2024-07-10" },
    { orderId: "WO-00124", product: "Gadget B", status: "Completed", dueDate: "2024-07-08" },
    { orderId: "WO-00125", product: "Device C", status: "Pending", dueDate: "2024-07-12" },
    { orderId: "WO-00126", product: "Component D", status: "In Progress", dueDate: "2024-07-15" },
    { orderId: "WO-00127", product: "Assembly E", status: "Completed", dueDate: "2024-07-05" },
    { orderId: "WO-00128", product: "Part F", status: "Pending", dueDate: "2024-07-20" },
    { orderId: "WO-00129", product: "Module G", status: "In Progress", dueDate: "2024-07-18" },
    { orderId: "WO-00130", product: "Unit H", status: "Completed", dueDate: "2024-07-22" },
    { orderId: "WO-00131", product: "Item I", status: "Pending", dueDate: "2024-07-25" },
    { orderId: "WO-00132", product: "Product J", status: "In Progress", dueDate: "2024-07-30" },
    { orderId: "WO-00133", product: "Device K", status: "Completed", dueDate: "2024-08-01" },
    { orderId: "WO-00134", product: "Widget L", status: "Pending", dueDate: "2024-08-05" },
    { orderId: "WO-00135", product: "Gadget M", status: "In Progress", dueDate: "2024-08-10" },
    { orderId: "WO-00136", product: "Component N", status: "Completed", dueDate: "2024-08-15" },
    { orderId: "WO-00137", product: "Assembly O", status: "Pending", dueDate: "2024-08-20" },
    { orderId: "WO-00138", product: "Part P", status: "In Progress", dueDate: "2024-08-25" },
    { orderId: "WO-00139", product: "Module Q", status: "Completed", dueDate: "2024-08-30" },
    { orderId: "WO-00140", product: "Unit R", status: "Pending", dueDate: "2024-09-05" },
    { orderId: "WO-00141", product: "Item S", status: "In Progress", dueDate: "2024-09-10" },
    { orderId: "WO-00142", product: "Product T", status: "Completed", dueDate: "2024-09-15" },
    { orderId: "WO-00143", product: "Device U", status: "Pending", dueDate: "2024-09-20" },
    { orderId: "WO-00144", product: "Widget V", status: "In Progress", dueDate: "2024-09-25" },
    { orderId: "WO-00145", product: "Gadget W", status: "Completed", dueDate: "2024-09-30" },
    { orderId: "WO-00146", product: "Component X", status: "Pending", dueDate: "2024-10-05" },
    { orderId: "WO-00147", product: "Assembly Y", status: "In Progress", dueDate: "2024-10-10" },
    { orderId: "WO-00148", product: "Part Z", status: "Completed", dueDate: "2024-10-15" },
    { orderId: "WO-00149", product: "Module AA", status: "Pending", dueDate: "2024-10-20" },
    { orderId: "WO-00150", product: "Unit AB", status: "In Progress", dueDate: "2024-10-25" },
    { orderId: "WO-00151", product: "Item AC", status: "Completed", dueDate: "2024-10-30" },
    { orderId: "WO-00152", product: "Product AD", status: "Pending", dueDate: "2024-11-05" },
    { orderId: "WO-00153", product: "Device AE", status: "In Progress", dueDate: "2024-11-10" },
    { orderId: "WO-00154", product: "Widget AF", status: "Completed", dueDate: "2024-11-15" },
    { orderId: "WO-00155", product: "Gadget AG", status: "Pending", dueDate: "2024-11-20" },
    { orderId: "WO-00156", product: "Component AH", status: "In Progress", dueDate: "2024-11-25" },
    { orderId: "WO-00157", product: "Assembly AI", status: "Completed", dueDate: "2024-11-30" },
    { orderId: "WO-00158", product: "Part AJ", status: "Pending", dueDate: "2024-12-05" },
    { orderId: "WO-00159", product: "Module AK", status: "In Progress", dueDate: "2024-12-10" },
    { orderId: "WO-00160", product: "Unit AL", status: "Completed", dueDate: "2024-12-15" }
];

const productionEfficiency = (completed:number, total:number) => {
    return total > 0 ? ((completed / total) * 100).toFixed(2) + "%" : "0%";
}
const totalWorkOrders = MANUFACTURING_DATA.length;
const completedWorkOrders = MANUFACTURING_DATA.filter((wo) => wo.status === "Completed").length;
const machineDowntime = 0; // Placeholder, replace with actual calculation if available

export const MANUFACTURING_STATISTICS = {
    TOTAL_WORK_ORDERS: totalWorkOrders,
    COMPLETED_WORK_ORDERS: completedWorkOrders,
    PRODUCTION_EFFICIENCY: productionEfficiency(completedWorkOrders, totalWorkOrders),
    MACHINE_DOWNTIME: machineDowntime + " hours"
};