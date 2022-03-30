import {ComponentName} from "@miniskylab/antimatter-component";
import {Decorator} from "@miniskylab/antimatter-decorator";
import {MonthViewComponentProps} from "./models/month-view-component-props";
import {MonthViewExporter} from "./models/month-view-exporter";
import {MonthViewComponent} from "./month-view-component";

export const MonthViewComponentName = Decorator.getValue<string>(ComponentName, MonthViewComponentProps);

export {MonthViewComponent};
export {MonthViewComponentProps};

export {MonthViewVariant} from "./variants";
export type {MonthViewExportProps as MonthViewProps} from "./models/month-view-export-props";
export const MonthView = new MonthViewExporter().export(MonthViewComponent);
