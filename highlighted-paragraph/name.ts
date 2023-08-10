import {ComponentName as ComponentNameDecorator, Decorator} from "@miniskylab/antimatter-framework";
import {HighlightedParagraphProps} from "./model";

export const ComponentName = Decorator.getValue<string>(ComponentNameDecorator, HighlightedParagraphProps);
