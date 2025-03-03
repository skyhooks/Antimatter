import {ComponentProps, type GestureResponderEventHandler} from "@miniskylab/antimatter-framework";
import {Data} from "../classes";
import {Mode, Status} from "../enums";
import {Tag} from "../types";
import {Style} from "./style";

export type Props = ComponentProps<Style> & {
    readonly id: string;
    readonly mode?: Mode;
    readonly name?: string;
    readonly recurrencePattern?: string;
    readonly recurrencePatternPlaceholder?: string;
    readonly secNotificationInterval?: number;
    readonly notificationIntervalLabel?: string;
    readonly hourNotificationIntervalPlaceholder?: string;
    readonly minuteNotificationIntervalPlaceholder?: string;
    readonly secNotificationIntervalPlaceholder?: string;
    readonly isShowingProgressStripes?: boolean;
    readonly maxSelectedTagCount?: number;
    readonly isToBeDeleted?: boolean;
    readonly tags?: Record<string, Tag>;
    readonly status?: Status;
    readonly dueDate?: Date;
    readonly originalData?: Data;
    readonly modifiedDate?: Date;
    readonly createdDate?: Date;
    readonly onPress?: GestureResponderEventHandler;
    readonly onChange?: (newReminderData: Partial<Data>) => void;
}
