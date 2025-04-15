import { AccountType, TaskCardType } from "../types";

export const mockTasks: TaskCardType[] = [
  {
    id: "1",
    title: "Complete Project Proposal",
    description:
      "Draft a comprehensive project proposal including timeline, budget, and resource allocation.",
    status: "in-progress",
    author: "Jane Smith",
    createdAt: "09:45",
    createdDate: "2025-03-12",
    updatedAt: "14:30",
    updatedDate: "2025-03-15",
  },
  {
    id: "2",
    title: "Client Meeting Preparation",
    description:
      "Prepare presentation slides and talking points for the quarterly client review meeting.",
    status: "completed",
    author: "Michael Johnson",
    createdAt: "16:20",
    createdDate: "2025-03-10",
    updatedAt: "11:15",
    updatedDate: "2025-03-14",
  },
  {
    id: "3",
    title: "Bug Fix: Login Authentication",
    description:
      "Resolve the authentication issue affecting users on mobile devices during login.",
    status: "review",
    author: "David Chen",
    createdAt: "08:30",
    createdDate: "2025-03-18",
  },
  {
    id: "4",
    title: "UI Design Review",
    description:
      "Review the latest UI mockups and provide feedback to the design team.",
    status: "not-started",
    author: "Sarah Williams",
    createdAt: "13:45",
    createdDate: "2025-03-20",
  },
  {
    id: "5",
    title: "Database Optimization",
    description:
      "Improve query performance and optimize database structure for better efficiency.",
    status: "in-progress",
    author: "Robert Taylor",
    createdAt: "10:00",
    createdDate: "2025-03-16",
    updatedAt: "09:20",
    updatedDate: "2025-03-19",
  },
  {
    id: "6",
    title: "Documentation Update",
    description:
      "Update API documentation with latest endpoint changes and usage examples.",
    status: "completed",
    author: "Emily Davis",
    createdAt: "14:15",
    createdDate: "2025-03-08",
    updatedAt: "16:45",
    updatedDate: "2025-03-09",
  },
  {
    id: "7",
    title: "Weekly Team Sync",
    description:
      "Prepare agenda and coordinate weekly team synchronization meeting.",
    status: "Recurring",
    author: "Alex Rodriguez",
    createdAt: "09:00",
    createdDate: "2025-03-17",
  },
  {
    id: "8",
    title: "Feature Implementation: User Dashboard",
    description:
      "Implement new analytics components on the user dashboard as per requirements.",
    status: "in-progress",
    author: "Jessica Brown",
    createdAt: "11:30",
    createdDate: "2025-03-14",
    updatedAt: "13:10",
    updatedDate: "2025-03-18",
  },
  {
    id: "9",
    title: "Security Audit Review",
    description:
      "Review findings from the recent security audit and prioritize remediation steps.",
    status: "review",
    author: "Kevin Wilson",
    createdAt: "15:45",
    createdDate: "2025-03-19",
  },
  {
    id: "10",
    title: "Q2 Strategy Planning",
    description:
      "Outline strategic initiatives and goals for the upcoming quarter.",
    status: "not-started",
    author: "Lisa Martinez",
    createdAt: "08:50",
    createdDate: "2025-03-21",
  },
  {
    id: "11",
    title: "Security Block Review",
    description:
      "Review findings from the recent security audit and prioritize remediation steps.",
    status: "blocked",
    author: "Kevin Wilson",
    createdAt: "15:45",
    createdDate: "2025-03-19",
  },
  {
    id: "12",
    title: "Annual Budget Review",
    description:
      "Outline strategic initiatives and goals for the upcoming quarter.",
    status: "blocked",
    author: "Lisa Martinez",
    createdAt: "08:50",
    createdDate: "2025-03-21",
  },
];

export const mockAccount: AccountType = {
  name: "Dimitri Hector",
  email: "email@aol.com",
  role: "Administrator",
  accountCreationDate: "2025-03-01",
  lastLoginDate: "2025-03-20",
  notifications: [
    {
      id: 1,
      title: "New Feature Release",
      description: "Check out the new features in the latest update.",
      status: "unread",
    },
    {
      id: 2,
      title: "Server Maintenance Scheduled",
      description:
        "Scheduled maintenance on March 25th from 2 AM to 4 AM. Expect downtime.",
      status: "read",
    },
    {
      id: 3,
      title: "User Feedback Received",
      description:
        "You have received new feedback from users regarding the recent update.",
      status: "unread",
    },
    {
      id: 4,
      title: "Password Change Notification",
      description: "Your password was changed successfully.",
      status: "read",
    },
    {
      id: 5,
      title: "New Comment on Task",
      description: "A new comment has been added to your task.",
      status: "unread",
    },
  ],
};
export default mockTasks;
