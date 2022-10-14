import Note from './Note';


const NotesList = ({
	notes,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			<h2 className='title'>My Notes</h2>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}

				/>
			))}
		</div>
	);
};

export default NotesList;
