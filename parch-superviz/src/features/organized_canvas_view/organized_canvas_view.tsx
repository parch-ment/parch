import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { curr_chosen_project } from "../projects_view/projects_view_slice";
import { useNavigate } from 'react-router-dom';

export const OrganizedCanvasView: React.FC = () => {
    const chosen_project = useSelector((state: RootState) => curr_chosen_project(state))
    const navigate = useNavigate();

    const handleToggleClick = () => {
        navigate("/open_canvas_view");
    };

    return (
      <div>
        <h1>Organized Canvas</h1>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '50%', height: '50%', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
            <h2>{chosen_project?.title}</h2>
            <p>This is the canvas view.</p>
            <button onClick={handleToggleClick}>Switch to Open Canvas View</button>
          </div>
        </div>
      </div>
    );
  };