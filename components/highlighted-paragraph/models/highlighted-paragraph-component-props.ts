import {IsEnum, IsString} from "@miniskylab/antimatter-class-validator";
import {ComponentName, ComponentProps} from "@miniskylab/antimatter-component";
import {IconName} from "@miniskylab/antimatter-icon";
import {IsOptional} from "class-validator";

@ComponentName("Highlighted Paragraph")
export class HighlightedParagraphComponentProps extends ComponentProps
{
    /**
     * <i style="color: #9B9B9B">(not available)</i>
     *
     * @type IconName
     */
    @IsEnum(IconName)
    @IsOptional()
    readonly icon?: IconName;


    /**
     * <i style="color: #9B9B9B">(not available)</i>
     */
    @IsString()
    @IsOptional()
    readonly title?: string;


    /**
     * <i style="color: #9B9B9B">(not available)</i>
     */
    @IsString()
    @IsOptional()
    readonly text?: string;
}
