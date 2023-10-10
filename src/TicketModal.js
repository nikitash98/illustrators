import React from 'react'
import { Button, GridRow, Header, Icon, Modal, Grid} from 'semantic-ui-react'


function TicketModal(props) {
  
    return (
      <Modal
        
        onClose={() => props.setOpen(false)}
        onOpen={() => props.setOpen(true)}
        open={props.open}
        size='large'
      >
        <Modal.Content  className='tick_modal'>
          <Grid>
            <Grid.Row>
            <Grid.Column width= {6}>
            <img src="sketch.jpg"/>

            </Grid.Column>
            <Grid.Column width={10}>
              <h1>
              Costumed Sketch Night at the Society
              </h1>
              <h2>
              October 11
              </h2>
              <h3>
              $10.00 – $20.00
              </h3>
              <p>
              Artists of all skill levels are invited for figure drawing at the Society of Illustrators, with theme curated by Anthony Kieren. Models will be costumed.
              <br/>
              <br/>

              Chairs and sketch boards will be provided, but artists should come prepared with their own art materials.
              <br/>
              <br/>

              Guests are also invited to enjoy their favorite cocktail at our bar.
              <br/>

              <br/>
              Please note, doors for this event will open at 6:00pm. No outside food or drink.
              </p>
              <Button>Buy Tickets</Button>
              
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    )
  }

  export default TicketModal

  