import React from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getReports } from '../../../store/reports/operations'


class ReportsPage extends React.Component {
  componentDidMount() {
    this.props.getReports()
  }

  downloadEmployeeData = (id, fileName) => {
    fetch(window.location.origin + `/api/v1/reports/${id}/download`,
      {
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.auth_token
        }
      })
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          a.click();
        });
        //window.location.href = response.url;
      });
  }

  render() {
    const { reports } = this.props

    if (!reports) {
      return <p>Получаем отчеты...</p>
    }

    return (
      <Table celled color="black" textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Icon name="title"/> Title
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="description"/> Description
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="fileName"/> Filename
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {reports.map(report => (
            <Table.Row key={report.id}>
              <Table.Cell>{report.title}</Table.Cell>
              <Table.Cell>{report.description}</Table.Cell>
              <Table.Cell>
                <a href="/" onClick={() => this.downloadEmployeeData(report.id, report.file_data.original_filename)}>
                  {report.file_data.original_filename}
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = ({ reports }) => {

  return {
    reports: reports.reports,
  }
}

const mapDispatchToProps = {
  getReports
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportsPage))