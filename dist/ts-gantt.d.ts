// Generated by dts-bundle-generator v5.6.0

import dayjs from 'dayjs';

export declare class TsGanttTask {
	readonly uuid: string;
	readonly parentUuid: string;
	readonly externalId: string;
	readonly parentExternalId: string;
	readonly nestingLvl: number;
	readonly hasChildren: boolean;
	readonly name: string;
	readonly localizedNames: {
		[key: string]: string;
	};
	readonly datePlannedStart: dayjs.Dayjs;
	readonly datePlannedEnd: dayjs.Dayjs;
	readonly dateActualStart: dayjs.Dayjs;
	readonly dateActualEnd: dayjs.Dayjs;
	readonly progress: number;
	shown: boolean;
	expanded: boolean;
	constructor(id: string, parentId: string, name: string, localizedNames: {
		[key: string]: string;
	}, progress: number, datePlannedStart?: Date, datePlannedEnd?: Date, dateActualStart?: Date, dateActualEnd?: Date, nestingLvl?: number, hasChildren?: boolean, parentUuid?: string, uuid?: string);
	static convertModelsToTasks(taskModels: TsGanttTaskModel[], idMap?: Map<string, string>): TsGanttTask[];
	static detectTaskChanges(data: TsGanttTaskUpdateResult): TsGanttTaskChangeResult;
	static createTasksIdMap(tasks: TsGanttTask[]): Map<string, string>;
	static checkPaternity(tasks: TsGanttTask[], parent: TsGanttTask, child: TsGanttTask): boolean;
	static checkForCollapsedParent(tasks: TsGanttTask[], task: TsGanttTask): boolean;
	static defaultComparer: (a: TsGanttTask, b: TsGanttTask) => number;
	static sortTasksRecursively(tasks: TsGanttTask[], parentUuid: string): TsGanttTask[];
	equals(another: TsGanttTask): boolean;
	compareTo(another: TsGanttTask): number;
	getState(): "not-started" | "in-progress" | "overdue" | "completed" | "completed-late";
	toModel(): TsGanttTaskModel;
}
export interface TsGanttTaskModel {
	id: string;
	parentId: string;
	name: string;
	progress: number;
	datePlannedStart: Date;
	datePlannedEnd: Date;
	dateActualStart: Date;
	dateActualEnd: Date;
	localizedNames: {
		[key: string]: string;
	};
}
export interface TsGanttTaskUpdateResult {
	oldTasks: TsGanttTask[];
	newTasks: TsGanttTask[];
}
export interface TsGanttTaskChangeResult {
	added: TsGanttTask[];
	deleted: TsGanttTask[];
	changed: TsGanttTask[];
	all: TsGanttTask[];
}
export declare class TsGanttOptions {
	multilineSelection: boolean;
	useCtrlKeyForMultilineSelection: boolean;
	drawTodayLine: boolean;
	highlightRowsDependingOnTaskState: boolean;
	columnsMinWidthPx: number[];
	columnsContentAlign: ("start" | "center" | "end")[];
	separatorWidthPx: number;
	headerHeightPx: number;
	rowHeightPx: number;
	borderWidthPx: number;
	barStrokeWidthPx: number;
	barMarginPx: number;
	barCornerRadiusPx: number;
	rowSymbols: TsGanttRowSymbols;
	chartShowProgress: boolean;
	chartDisplayMode: "planned" | "actual" | "both";
	chartScale: "day" | "week" | "month" | "year";
	chartDateOffsetDays: {
		[key: string]: number;
	};
	chartDateOffsetDaysMin: {
		[key: string]: number;
	};
	chartDayWidthPx: {
		[key: string]: number;
	};
	locale: string;
	localeDecimalSeparator: {
		[key: string]: string;
	};
	localeDateFormat: {
		[key: string]: string;
	};
	localeFirstWeekDay: {
		[key: string]: number;
	};
	localeDateMonths: {
		[key: string]: string[];
	};
	localeDateDays: {
		[key: string]: string[];
	};
	localeDateDaysShort: {
		[key: string]: string[];
	};
	localeDateScale: {
		[key: string]: string[];
	};
	localeFooters: {
		[key: string]: string[];
	};
	localeHeaders: {
		[key: string]: string[];
	};
	localeDurationFormatters: {
		[key: string]: (duration: number) => string;
	};
	columnValueGetters: ((a: TsGanttTask) => string)[];
	taskComparer: (taskA: TsGanttTask, taskB: TsGanttTask) => number;
	constructor(item?: object);
}
export interface TsGanttRowSymbols {
	expanded: string;
	collapsed: string;
	childless: string;
}
export declare class TsGantt {
	private _options;
	private _htmlContainer;
	private _htmlWrapper;
	private _htmlTableWrapper;
	private _htmlChartWrapper;
	private _separatorDragActive;
	private _ignoreNextScrollEvent;
	private _table;
	private _chart;
	private _tasks;
	get tasks(): TsGanttTaskModel[];
	set tasks(models: TsGanttTaskModel[]);
	private _tasksByParentUuid;
	private _selectedTasks;
	get selectedTasks(): TsGanttTaskModel[];
	set selectedTasks(models: TsGanttTaskModel[]);
	set locale(value: string);
	set chartScale(value: "day" | "week" | "month" | "year");
	set chartDisplayMode(value: "planned" | "actual" | "both");
	onRowClickCb: (model: TsGanttTaskModel, event: MouseEvent) => void;
	onRowDoubleClickCb: (model: TsGanttTaskModel, event: MouseEvent) => void;
	onRowContextMenuCb: (model: TsGanttTaskModel, event: MouseEvent) => void;
	onSelectionChangeCb: (models: TsGanttTaskModel[]) => void;
	constructor(containerSelector: string, options?: TsGanttOptions);
	destroy(): void;
	expandAll(state: boolean): void;
	private setCssVariables;
	private createLayout;
	onResize: (e: Event) => void;
	private onMouseDownOnPartsSeparator;
	private onMouseMoveWhileResizingParts;
	private onMouseUpWhileResizingParts;
	private onWrapperScroll;
	private onRowClick;
	private onRowContextMenu;
	private onRowExpanderClick;
	private removeWindowEventListeners;
	private removeDocumentEventListeners;
	private updateTasks;
	private update;
	private toggleTaskExpanded;
	private changeSelection;
	private refreshSelection;
	private selectTasks;
	private scrollChartToTasks;
	private updateLocale;
	private updateChartScale;
	private updateChartDisplayMode;
	private groupAndSortTasks;
	private getShownUuidsRecursively;
}

export {};
