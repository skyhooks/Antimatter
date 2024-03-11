import {ButtonContextHook} from "@miniskylab/antimatter-button";
import {Color} from "@miniskylab/antimatter-color-scheme";
import {useResponsiveStyle} from "@miniskylab/antimatter-framework";
import {LabelStyle, LabelVariant} from "@miniskylab/antimatter-label";
import {NavButtonContextHook, NavButtonStyle, NavButtonVariant} from "@miniskylab/antimatter-nav-button";
import {PressableStyle} from "@miniskylab/antimatter-pressable";
import {ViewStyle, ViewVariant} from "@miniskylab/antimatter-view";
import {Card} from "../components";
import {TopicCardGroupStyle} from "../models";

const TopicCardGroup__Root: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "stretch",
        minWidth: 300,
        maxWidth: 1000,
        marginVertical: -10,
        filter: `drop-shadow(0 -2px 20px ${Color.Black})`,
        ...useResponsiveStyle("Medium", {
            marginHorizontal: -10
        })
    };
};

const TopicCardGroup__Card__Root: ViewStyle = function (viewProps)
{
    const cardContext = Card.ContextHook.useCardContext();

    return {
        ...ViewVariant.Default(viewProps),
        flexDirection: "row",
        alignItems: "stretch",
        flexBasis: "100%",
        marginVertical: 10,
        ...useResponsiveStyle("Medium", {flexBasis: "50%"}),
        ...useResponsiveStyle("Large", {flexBasis: "33.33%"}),
        ...cardContext.props.thisIsPlaceholderCard && {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            opacity: 0
        }
    };
};

const TopicCardGroup__Card__Content: ViewStyle = function (viewProps)
{
    const cardContext = Card.ContextHook.useCardContext();

    return {
        ...ViewVariant.Default(viewProps),
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: Color.Background,
        ...cardContext.props.thisIsPlaceholderCard && {
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    };
};

const TopicCardGroup__Card__HorizontalMargin: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        width: 10,
        display: "none",
        ...useResponsiveStyle("Medium", {
            display: "flex"
        })
    };
};

const TopicCardGroup__Card__Wysiwyg: LabelStyle = function (labelProps)
{
    return {
        ...LabelVariant.Default(labelProps),
        lineHeight: 28,
        fontSize: 16,
        color: Color.Neutral
    };
};

const TopicCardGroup__Card__CtaContainer: ViewStyle = function (viewProps)
{
    return {
        ...ViewVariant.Default(viewProps),
        width: "100%",
        marginBottom: 5
    };
};

const TopicCardGroup__Card__Cta__Root: PressableStyle = function (pressableProps, pressableState)
{
    const buttonContext = ButtonContextHook.useButtonContext();
    const navButtonContext = NavButtonContextHook.useNavButtonContext();

    const inheritedStyle = NavButtonVariant.Default(navButtonContext.props)(buttonContext.props).Root(pressableProps, pressableState);

    return {
        ...inheritedStyle,
        width: "100%",
        marginTop: 15
    };
};

const TopicCardGroup__Card__Cta: NavButtonStyle = function (navButtonProps)
{
    return function (buttonProps)
    {
        return {
            ...NavButtonVariant.Default(navButtonProps)(buttonProps),
            Root: TopicCardGroup__Card__Cta__Root
        };
    };
};

const TopicCardGroup__Card: Card.Style = function ()
{
    return {
        Root: TopicCardGroup__Card__Root,
        Content: TopicCardGroup__Card__Content,
        HorizontalMargin: TopicCardGroup__Card__HorizontalMargin,
        Wysiwyg: TopicCardGroup__Card__Wysiwyg,
        CtaContainer: TopicCardGroup__Card__CtaContainer,
        Cta: TopicCardGroup__Card__Cta
    };
};

export const ThreeColumns: TopicCardGroupStyle = function ()
{
    return {
        Root: TopicCardGroup__Root,
        Card: TopicCardGroup__Card
    };
};
