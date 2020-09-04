import React, { Dispatch, SetStateAction } from 'react';

import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

type TSearchInputProps = {
   query: string;
   updateQuery: Dispatch<SetStateAction<string>>;

}

const SearchInput = ({
  query,
  updateQuery,

}: TSearchInputProps) => (
  <Container>
    <Row className="text-center justify-content-md-center" style={{ marginTop: '2rem' }}>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Search restaurants</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter restaurant name"
            style={{ width: '18rem', marginTop: '1rem' }}

            onChange={(event) => updateQuery(event.target.value.toLocaleLowerCase())}

          />
          <Button variant="primary" style={{ marginTop: '1rem' }}>
            Search
          </Button>
        </Form.Group>
      </Form>
    </Row>
  </Container>
);

export default SearchInput;
