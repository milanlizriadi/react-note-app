import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/index";

function NoteItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive}>
          {archived ? "Remove From Archive" : "Archive"}
        </ArchiveButton>
      </div>
    </div>
  );
}

export default NoteItem;
