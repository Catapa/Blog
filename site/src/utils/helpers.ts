import { Article } from "@/types";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

/**
 * Helper function for retrieving a specific cookie on client-side 
 * @param name - the name of the `cookie`
 * @returns 
 */
export const getCookie = (name: string): string | undefined => {
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];

   return cookieValue;
};

/**
 * Helper function for deleting a specific cookie on client-side 
 * @param name - the name of the `cookie`
 * @returns 
 */
export const eraseCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0;`;
};

/**
 * Convert markdown to its HTML representation
 * @param markdown 
 * @returns 
 */
export const markdownToHTML = (markdown: string | undefined | null) => {
    if (!markdown) return '';
    const sanitizedMarkdown = DOMPurify.sanitize(markdown, {USE_PROFILES: {html: true}});
    const parsedHTML = marked.parse(sanitizedMarkdown);
    return parsedHTML.toString();
};

/**
 * Extract the src of the first <img> tag found in an HTML
 * @param html
 * @returns 
 */
export const extractFirstImageURL = (html: string | undefined) => {
    if (!html) return;
    const imgRegex: RegExp = /!\[.*?\]\((https?:\/\/[^\s\)]+)\)/;
    const match = html.match(imgRegex);
    const thumbnailURL = match && match[1];

    return match ? thumbnailURL : undefined;
}

/**
 * Extract article data based on a provided `FormData`.
 * @param formData 
 * @returns 
 */
export const extractArticle = (formData: FormData) => {
    const title: string = formData.get('title') as string;
    const topicId: number = Number(formData.get('category') || 1);
    const content: string = formData.get('content') as string || '';
    const thumbnail: string = extractFirstImageURL(content) || '';

    return {
        title,
        topicId,
        content,
        thumbnail
    } as Article;
};

export const format_date = (date: string): string => {
    return new Date(date).toLocaleDateString('en-us', {day:'numeric', month: 'short', year: 'numeric'});
};

export const limit_string = (title: string, limit: number) => {
    return (title.length > limit) 
    ? title.substring(0, limit) + '...'
    : title;
};