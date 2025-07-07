import { db } from '$lib/db';
import { createStore } from './factory';

import type {
	Transaction,
	Category,
	Debt,
	Project,
	Task,
	Habit,
	HabitEntry,
	SavingGoal,
	SavingEntry,
	Note,
	Tag,
	NoteTag,
	JournalEntry
} from '$lib/db';

export const transactionStore = createStore<'transaction', Transaction>(db.transactions);
export const categoryStore = createStore<'category', Category>(db.categories);
export const debtStore = createStore<'debt', Debt>(db.debts);
export const projectStore = createStore<'project', Project>(db.projects);
export const taskStore = createStore<'task', Task>(db.tasks);
export const habitStore = createStore<'habit', Habit>(db.habits);
export const habitEntryStore = createStore<'habitEntry', HabitEntry>(db.habitEntries);
export const savingGoalStore = createStore<'savingGoal', SavingGoal>(db.savingGoals);
export const savingEntryStore = createStore<'savingEntry', SavingEntry>(db.savingEntries);
export const noteStore = createStore<'note', Note>(db.notes);
export const tagStore = createStore<'tag', Tag>(db.tags);
export const noteTagStore = createStore<'noteTag', NoteTag>(db.noteTags);
export const journalEntryStore = createStore<'journalEntry', JournalEntry>(db.journalEntries);
