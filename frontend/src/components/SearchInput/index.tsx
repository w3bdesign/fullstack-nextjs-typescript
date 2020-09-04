import React, { Dispatch, SetStateAction } from 'react';

import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const SearchInput = ({
  query,
  updateQuery,
}: {
  query: string;
  updateQuery: Dispatch<SetStateAction<string>>;
}) => (
  <Container>
    <Row className="justify-content-md-center" style={{ marginTop: '1rem' }}>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Search restaurants</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter restaurant name"
            style={{ width: '18rem', marginTop: '1rem' }}
            onChange={(event) => updateQuery(event.target.value.toLocaleLowerCase())}
            value={query}
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
