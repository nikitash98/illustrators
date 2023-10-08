import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


function TicketModal(props) {
  
    return (
      <Modal
        basic
        onClose={() => props.setOpen(false)}
        onOpen={() => props.setOpen(true)}
        open={props.open}
        size='small'
        trigger={<Button style = {{position: "absolute", top: "0%", left: "0%"}}>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name='archive' />
          Archive Old Messages
        </Header>
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => props.setOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={() => props.setOpen(false)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  export default TicketModal

  