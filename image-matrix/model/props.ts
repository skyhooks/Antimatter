import {IsArray} from "@miniskylab/antimatter-class-validator";
import {ComponentName, ComponentProps, Image} from "@miniskylab/antimatter-model";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";

@ComponentName("Image Matrix")
export class ImageMatrixProps extends ComponentProps
{
    /**
     * <i style="color: #9B9B9B">(not available)</i>
     */
    @IsArray()
    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => Image)
    readonly images?: Image[];
}
