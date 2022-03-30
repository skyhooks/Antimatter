import {ComponentName} from "@miniskylab/antimatter-component";
import {Decorator} from "@miniskylab/antimatter-decorator";
import {YearViewComponentProps} from "./models/year-view-component-props";
import {YearViewExporter} from "./models/year-view-exporter";
import {YearViewComponent} from "./year-view-component";

export const YearViewComponentName = Decorator.getValue<string>(ComponentName, YearViewComponentProps);

export {YearViewComponent};
export {YearViewComponentProps};

export {YearViewVariant} from "./variants";
export type {YearViewExportProps as YearViewProps} from "./models/year-view-export-props";
export const YearView = new YearViewExporter().export(YearViewComponent);
