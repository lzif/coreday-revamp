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
// STRUKTUR PEMBUNGKUS (Pola dari db.ts)
// --------------------------------------------------

// Tipe item sekarang mencakup semua 13 tabel
export type ItemType =
	| 'transaction'
	| 'category'
	| 'debt'
	| 'project'
	| 'task'
	| 'habit'
	| 'habitEntry'
	| 'savingGoal'
	| 'savingEntry'
	| 'note'
	| 'tag'
	| 'noteTag'
	| 'journalEntry';

// Pembungkus generik BaseItem
export interface BaseItem<T extends ItemType, D> {
	id: string; // Kunci Primer STRING, harus unik (misalnya, nanoid())
	type: T;
	data: D;
	updatedAt: number; // Unix timestamp untuk pengurutan
}

// Ekspor tipe yang dibungkus untuk setiap tabel
export type TransactionItem = BaseItem<'transaction', Transaction>;
export type CategoryItem = BaseItem<'category', Category>;
export type DebtItem = BaseItem<'debt', Debt>;
export type ProjectItem = BaseItem<'project', Project>;
export type TaskItem = BaseItem<'task', Task>;
export type HabitItem = BaseItem<'habit', Habit>;
export type HabitEntryItem = BaseItem<'habitEntry', HabitEntry>;
export type SavingGoalItem = BaseItem<'savingGoal', SavingGoal>;
export type SavingEntryItem = BaseItem<'savingEntry', SavingEntry>;
export type NoteItem = BaseItem<'note', Note>;
export type TagItem = BaseItem<'tag', Tag>;
export type NoteTagItem = BaseItem<'noteTag', NoteTag>;
export type JournalEntryItem = BaseItem<'journalEntry', JournalEntry>;

// --------------------------------------------------
// KELAS DATABASE (Menggunakan 13 Tabel)
// --------------------------------------------------

class AppDB extends Dexie {
	// Deklarasi 13 tabel, masing-masing menggunakan tipe Item yang dibungkus
	transactions!: Table<TransactionItem, string>;
	categories!: Table<CategoryItem, string>;
	debts!: Table<DebtItem, string>;
	projects!: Table<ProjectItem, string>;
	tasks!: Table<TaskItem, string>;
	habits!: Table<HabitItem, string>;
	habitEntries!: Table<HabitEntryItem, string>;
	savingGoals!: Table<SavingGoalItem, string>;
	savingEntries!: Table<SavingEntryItem, string>;
	notes!: Table<NoteItem, string>;
	tags!: Table<TagItem, string>;
	noteTags!: Table<NoteTagItem, string>; // Kunci primer akan menjadi 'id' dari BaseItem
	journalEntries!: Table<JournalEntryItem, string>;

	constructor() {
		super('app'); // Nama database 'app'
		this.version(1).stores({
			// Skema mendefinisikan 13 tabel.
			// 'id' adalah kunci primer (dari BaseItem), 'updatedAt' diindeks.
			transactions: 'id, updatedAt, data.categoryId, data.date',
			categories: 'id, updatedAt, data.type',
			debts: 'id, updatedAt, data.status',
			projects: 'id, updatedAt',
			tasks: 'id, updatedAt, data.projectId, data.status, data.deadline',
			habits: 'id, updatedAt',
			habitEntries: 'id, updatedAt, data.habitId, data.date',
			savingGoals: 'id, updatedAt',
			savingEntries: 'id, updatedAt, data.goalId, data.date',
			notes: 'id, updatedAt, data.isPinned',
			tags: 'id, updatedAt, data.name',
			// Untuk NoteTag, 'id' tetap menjadi kunci primer.
			// Anda harus membuat query pada 'data.noteId' atau 'data.tagId' secara manual.
			noteTags: 'id, updatedAt, data.noteId, data.tagId',
			journalEntries: 'id, updatedAt, data.date'
		});
	}
}

export const db = new AppDB();
