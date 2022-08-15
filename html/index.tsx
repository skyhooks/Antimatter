import React from "react";
import sanitizeHtml from "sanitize-html";
import "./html.scss";

class _Html
{
    render(dangerousHtmlString: string): JSX.Element
    {
        const sanitizedHtmlString = sanitizeHtml(
            dangerousHtmlString,
            {
                allowedAttributes: {
                    "*": ["class"]
                }
            }
        );

        return (
            <div
                className={"html"}
                dangerouslySetInnerHTML={{__html: sanitizedHtmlString}}
            />
        );
    }
}

export const Html = new _Html();
