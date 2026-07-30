# Infrastructure Specification: <System or Environment>

- Status: Draft
- Owner: <owner>

## Runtime topology

<Describe services, networks, dependencies, and trust boundaries.>

## Environments

| Environment | Purpose | Deployment trigger | Data policy |
|---|---|---|---|
| Local | Development | Manual | Synthetic/local |
| Test | Automated validation | CI | Synthetic |
| Staging | Release verification | Controlled | Sanitized |
| Production | User traffic | Approved release | Production |

## Configuration and secrets

- Configuration source: <source>
- Secret management: <mechanism>
- Rotation policy: <policy>

## Availability and recovery

- Availability objective: <objective>
- Backup policy: <policy>
- Recovery time objective: <RTO>
- Recovery point objective: <RPO>

## Observability

- Logging: <strategy>
- Metrics: <strategy>
- Tracing: <strategy>
- Alerting: <strategy>

## Security

- Network controls: <controls>
- Identity and access: <controls>
- Supply-chain controls: <controls>
- Vulnerability management: <controls>
