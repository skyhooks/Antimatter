import {ComponentName} from "@miniskylab/antimatter-component";
import {Decorator} from "@miniskylab/antimatter-decorator";
import {CircularSliderComponent} from "./circular-slider-component";
import {CircularSliderComponentProps} from "./models/circular-slider-component-props";
import {CircularSliderExporter} from "./models/circular-slider-exporter";

export const CircularSliderComponentName = Decorator.getValue<string>(ComponentName, CircularSliderComponentProps);

export {CircularSliderComponent};
export {CircularSliderComponentProps};

export {CircularSliderVariant} from "./variants";
export type {CircularSliderExportProps as CircularSliderProps} from "./models/circular-slider-export-props";
export const CircularSlider = new CircularSliderExporter().export(CircularSliderComponent);
