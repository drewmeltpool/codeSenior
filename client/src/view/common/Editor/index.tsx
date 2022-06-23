import React, { useEffect, useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';

interface IProps {
  valueHTML?: any;
  html?: (_editorState: any) => void;
}

const EditorComponent: React.FC<IProps> = ({ html, valueHTML }) => {
  const draft = valueHTML
    ? EditorState.createWithContent(
        ContentState.createFromBlockArray(htmlToDraft(valueHTML).contentBlocks)
      )
    : EditorState.createEmpty();

  const [editorState, setEditorState] = useState<any>(draft);

  const isEmpty = !editorState.getCurrentContent().hasText();

  // console.log(
  //   EditorState.createWithContent(
  //     ContentState.createFromBlockArray(
  //       htmlToDraft('<p>My initial content.</p>').contentBlocks,
  //       htmlToDraft('<p>My initial content.</p>').entityMap
  //     )
  //   )
  // );

  const handleEditorToHTML = (v: any) =>
    draftToHtml(convertToRaw(v.getCurrentContent()));

  useEffect(
    () => html && html({ isEmpty, html: handleEditorToHTML(editorState) }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editorState]
  );

  return (
    <Editor
      toolbar={{
        options: ['inline', 'list', 'link', 'emoji'],
      }}
      editorState={editorState}
      onEditorStateChange={setEditorState}
      wrapperClassName="editor-wrapper"
      editorClassName="editor"
    />
  );
};

export default EditorComponent;
