import { appStyles } from "@/theme/appStyles";

type PropsType = {
  noteVal: string;
  setNoteVal: Function;
};

export default function NoteCard(props: PropsType) {
  const { noteVal, setNoteVal } = props;

  return (
    <div className={appStyles.PAYMENT_BOX}>
      <h6 className="font-medium">Notes</h6>
      <textarea
        value={noteVal}
        placeholder="Enter a note here"
        onChange={(e) => setNoteVal(e.target.value)}
        className={`${appStyles.INPUT} min-h-[7rem] mt-4 mb-2`}
      />
      <div className="flex items-center text-xs space-x-3">
        <input type="checkbox" id="checkbox" name="checkbox" value="note" />
        <label htmlFor="checkbox">Show on receipt</label>
      </div>
    </div>
  );
}
