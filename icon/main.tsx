import {createIconSetFromIcoMoon} from "@expo/vector-icons";
import {AllPropertiesMustPresent, inheritTextStyleFrom, Ts, useComputedStyle, useDefaultIconSet} from "@miniskylab/antimatter-framework";
import {View} from "@miniskylab/antimatter-view";
import React, {JSX} from "react";
import {IconProps} from "./models";
import * as Variant from "./variants";

/**
 * <p style="color: #9B9B9B; font-style: italic">(no description available)</p>
 */
export function Icon({
    style = Variant.Default,
    name,
    selectable = true,
    pointerEvents = "auto"
}: IconProps): JSX.Element | null
{
    const props: AllPropertiesMustPresent<IconProps> = {
        style, name, selectable, pointerEvents
    };

    Ts.Error.throwIfNullOrUndefined(style);
    const {computedStyle} = useComputedStyle(style, props);

    const [assetLoaded, selection, expoFontName, expoAssetId] = useDefaultIconSet();
    if (!assetLoaded)
    {
        return null;
    }

    const IconSet = createIconSetFromIcoMoon(selection, expoFontName, expoAssetId);
    return (
        <View style={() => computedStyle} pointerEvents={pointerEvents}>
            <IconSet name={name} size={computedStyle.fontSize} style={inheritTextStyleFrom(computedStyle)} selectable={selectable}/>
        </View>
    );
}
