import {ITextField} from "../../../models/textField/_types/ITextField";
import {KeyEvent} from "../../keyEventHandler/KeyEvent";
import {insertText} from "../actions/insertText";

/**
 * Handles typing of characters
 * @param event The event to test
 * @param textField The text field to perform the event for
 * @returns Whether the event was caught
 */
export function handleCharacterInput(
    event: KeyEvent,
    textField: ITextField
): void | boolean {
    if (
        (event.type == "down" || event.type == "repeat") &&
        event.key.char &&
        !event.ctrl &&
        !event.alt
    ) {
        insertText(textField, event.key.char);
        return true;
    }
}
