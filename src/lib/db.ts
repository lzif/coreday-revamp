import Dexie, { type Table } from 'dexie';

// --------------------------------------------------
// INTERFACES
// --------------------------------------------------

/**
 * 💸 Finance Tracker: Represents a single income or expense.
 */
export interface Transaction {
  id?: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  categoryId: number;
  date: Date;
  notes?: string;
}

/**
 * 💸 Finance Tracker: Represents a financial category.
 */
export interface Category {
  id?: number;
  name: string;
  type: 'income' | 'expense';
  budget?: number; // Monthly budget
}

/**
 * 💸 Finance Tracker: Optional debt and receivable tracking.
 */
export interface Debt {
  id?: number;
  person: string;
  amount: number;
  type: 'receivable' | 'payable'; // Piutang | Utang
  status: 'unpaid' | 'paid';
  dueDate?: Date;
  createdAt: Date;
}

/**
 * 📆 Time & Task Manager: Represents a project that groups tasks.
 */
export interface Project {
  id?: number;
  name: string;
  description?: string;
  createdAt: Date;
}

/**
 * 📆 Time & Task Manager: Represents a single to-do item.
 */
export interface Task {
  id?: number;
  title: string;
  projectId?: number; // Optional link to a project
  parentId?: number; // Optional link for subtasks
  status: 'todo' | 'inprogress' | 'done';
  priority: 'low' | 'medium' | 'high';
  deadline?: Date;
  createdAt: Date;
}

/**
 * 🪴 Habit Tracker: Defines a habit to be tracked.
 */
export interface Habit {
  id?: number;
  name: string;
  frequency: 'daily' | 'weekly';
  createdAt: Date;
}

/**
 * 🪴 Habit Tracker: Logs a single completion of a habit.
 */
export interface HabitEntry {
  id?: number;
  habitId: number;
  date: Date; // The date the habit was marked as complete
}

/**
 * 💰 Saving Progress: Represents a savings goal.
 */
export interface SavingGoal {
  id?: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: Date;
  createdAt: Date;
}

/**
 * 💰 Saving Progress: Logs a contribution to a savings goal.
 */
export interface SavingEntry {
  id?: number;
  goalId: number;
  amount: number;
  date: Date;
  transactionId?: number; // Optional link to an income transaction
}

/**
 * 📝 Note & Daily Journal: A general-purpose note.
 */
export interface Note {
  id?: number;
  title: string;
  content: string; // Markdown content
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 📝 Note & Daily Journal: A tag for organizing notes.
 */
export interface Tag {
  id?: number;
  name: string;
}

/**
 * 📝 Note & Daily Journal: Links notes and tags (many-to-many).
 */
export interface NoteTag {
  noteId: number;
  tagId: number;
}

/**
 * 📝 Note & Daily Journal: A structured daily journal entry.
 */
export interface JournalEntry {
  id?: number;
  date: Date; // The specific day of the journal
  content: string; // Markdown content
  updatedAt: Date;
}


// --------------------------------------------------
// DATABASE CLASS
// --------------------------------------------------

export class CoredayDB extends Dexie {
  // Define tables based on interfaces
  transactions!: Table<Transaction>;
  categories!: Table<Category>;
  debts!: Table<Debt>;
  projects!: Table<Project>;
  tasks!: Table<Task>;
  habits!: Table<Habit>;
  habitEntries!: Table<HabitEntry>;
  savingGoals!: Table<SavingGoal>;
  savingEntries!: Table<SavingEntry>;
  notes!: Table<Note>;
  tags!: Table<Tag>;
  noteTags!: Table<NoteTag>;
  journalEntries!: Table<JournalEntry>;

  constructor() {
    super('CoredayDB');
    this.version(1).stores({
      // Schema definition with indexes
      // '++id' is the auto-incrementing primary key
      transactions: '++id, type, categoryId, date',
      categories: '++id, type',
      debts: '++id, type, status',
      projects: '++id, name',
      tasks: '++id, projectId, parentId, status, priority, deadline',
      habits: '++id, name',
      habitEntries: '++id, habitId, date',
      savingGoals: '++id, name',
      savingEntries: '++id, goalId, date',
      notes: '++id, isPinned, updatedAt',
      tags: '++id, &name', // '&name' ensures tag names are unique
      noteTags: '[noteId+tagId], noteId, tagId', // Compound primary key
      journalEntries: '++id, &date', // 'date' is unique for daily entries
    });
  }
}

export const db = new CoredayDB();
