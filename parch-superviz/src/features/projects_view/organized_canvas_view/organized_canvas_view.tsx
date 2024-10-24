import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const OrganizedCanvasView: React.FC = () => {
    const curr_project = useSelector((state: RootState) => state.projects)
    console.log(curr_project)

    return (
      <div>
        <h1>Organized Canvas</h1>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '50%', height: '50%', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
            <h2>Canvas</h2>
            <p>This is the canvas view.</p>
          </div>
        </div>
      </div>
    );
  };