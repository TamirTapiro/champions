import "./team.scss";
import { Button, ButtonGroup } from "@material-ui/core";


export default function Team(props) {
    return (
            <div className="team">
                <div className="row teamWrapper border">
                    <div className="col-1">
                        <img src={"assets/imgs/" + props.team.name + ".webp"}
                        alt={props.team.name} />
                    </div>
                    <div className="col-5 teamName pull-right">
                        {props.team.name}
                    </div>
                    
                    <div className="col-6 buttons">
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                        </ButtonGroup>
                    </div>
                    
                    
                </div>
            </div>
    )
}
