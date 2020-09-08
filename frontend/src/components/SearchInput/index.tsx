import React, { Dispatch, SetStateAction } from 'react';

import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

type TSearchInputProps = {
  updateQuery: Dispatch<SetStateAction<string>>;
};

const SearchInput = ({ updateQuery }: TSearchInputProps) => (
  <Container>
    <Row
      className="text-center justify-content-md-center"
      style={{ marginTop: '2rem' }}
    >
      <Form>
        <Card
          style={{ minWidth: '20rem', margin: '2rem' }}
          className="shadow"
        >
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
        </Card>
      </Form>
    </Row>
  </Container>
);

export default SearchInput;
