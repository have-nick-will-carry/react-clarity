export module clarity {
	/**
	 * Initialize Microsoft Clarity.
	 * @param id The clarity code given to you in the install instructions.
	 */
	export function init(id: string): void;

	/**
	 * Check if Clarity has been initialized
	 */
	export function hasStarted(): boolean;

	/**
	 * Identify user
	 * @param userId Custom Unique ID of a user
	 * @param sessionId - Optional ID for the user's session.
	 * @param pageId - Optional ID for the current page.
	 * @param friendlyName - Optional Friendly Name
	 */
	export function identify(userId: string, sessionId?: string, pageId?: string, friendlyName?: string): void;

	/**
	 * Cookie Consent
	 */
	export function consent(): void;

	/**
	 * Setup custom tags
	 * @param key The tag name that identifies the kind of information you're sending
	 * @param value The value attached to the tag
	 */
	export function setTag(key: string, value: string | string[]): void;

	/**
	 * Send an event to Clarity
	 * @param eventName The name of the event
	 */
	export function addEvent(eventName: string): void;

	/**
	 * Upgrade Session
	 * @param reason The reason of the session upgrade
	 */
	export function upgrade(reason: string): void;
}
