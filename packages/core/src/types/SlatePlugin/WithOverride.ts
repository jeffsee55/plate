/**
 * Slate plugin overriding the `editor` methods.
 * Naming convention is `with*`.
 */
import { TEditor } from '../TEditor';

export type WithOverride<
  TEditorInput extends TEditor = TEditor,
  TEditorOutputExtension = {}
> = (editor: TEditorInput) => TEditorInput & TEditorOutputExtension;
