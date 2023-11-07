import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model Selected */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
