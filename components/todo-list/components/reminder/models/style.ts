import {DropdownMenuStyle} from "@miniskylab/antimatter-dropdown-menu";
import {WithoutStyle} from "@miniskylab/antimatter-framework";
import {IconStyle} from "@miniskylab/antimatter-icon";
import {InputFieldStyle} from "@miniskylab/antimatter-input-field";
import {ProgressStripesStyle} from "@miniskylab/antimatter-motion-graphics";
import {NumericInputFieldStyle} from "@miniskylab/antimatter-numeric-input-field";
import {PressableStyle} from "@miniskylab/antimatter-pressable";
import {TextStyle} from "@miniskylab/antimatter-text";
import {ToggleStyle} from "@miniskylab/antimatter-toggle";
import {ViewStyle} from "@miniskylab/antimatter-view";
import {Props} from "./props";

export type Style = (reminderProps: WithoutStyle<Props>) => {
    Root: PressableStyle;
    Icon: IconStyle;
    NameTagAndDeadlineContainer: ViewStyle;
    NameInputField: InputFieldStyle;
    NameText: TextStyle;
    DueDateIcon: IconStyle;
    DueDate: TextStyle;
    DueDurationIcon: IconStyle;
    DueDuration: TextStyle;
    TagSelector: DropdownMenuStyle;
    TagContainer: ViewStyle;
    Tag: TextStyle;
    ExpansionArea: ViewStyle;
    RecurrencePatternInputField: InputFieldStyle;
    NotificationIntervalNumericInputField: NumericInputFieldStyle;
    SuspenseToggle: ToggleStyle;
    RescheduleForwardToggle: ToggleStyle;
    RescheduleBackwardToggle: ToggleStyle;
    ProgressStripes: ProgressStripesStyle;
};
