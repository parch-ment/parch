import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { curr_chosen_project } from "../projects_view/projects_view_slice";

export const OrganizedCanvasView: React.FC = () => {
    const chosen_project = useSelector((state: RootState) => curr_chosen_project(state))

    return (
      <div>
        <h1>Organized Canvas</h1>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '50%', height: '50%', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
            <h2>{chosen_project?.title}</h2>
            <p>This is the canvas view.</p>
          </div>
        </div>
      </div>
    );
  };