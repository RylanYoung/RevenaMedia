interface WorkflowNode {
  icon: React.ReactNode
  label: string
  sub?: string
  path?: string
  filled?: boolean
}

interface WorkflowMockupProps {
  title: string
  nodes: WorkflowNode[]
}

const FormIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="2.5" />
    <path d="M8 8h8M8 12h8M8 16h4" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5h16v11H8l-4 4Z" />
    <path d="M8.5 10h7M8.5 13h4" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 3v4M16 3v4M8.5 14l2.2 2.2L15.5 12" />
  </svg>
)

export { FormIcon, ClockIcon, MessageIcon, CalendarIcon }

export default function WorkflowMockup({ title, nodes }: WorkflowMockupProps) {
  return (
    <div className="mock">
      <div className="mock-bar">
        <div className="dots" aria-hidden="true">
          <i /><i /><i />
        </div>
        <span className="mtitle">{title}</span>
        <span className="live">
          <span className="d" aria-hidden="true" />
          ACTIVE
        </span>
      </div>
      <div className="mock-body mock-flow">
        <div className="flow compact" role="list" aria-label="Workflow steps">
          {nodes.map((node, i) => (
            <div key={i} role="listitem">
              <div className="node">
                <div className={`tile${node.filled ? ' fill' : ''}`}>
                  {node.icon}
                </div>
                <div className="nlabel">
                  {node.label}
                  {node.sub && <small>{node.sub}</small>}
                  {node.path && <span className="path">{node.path}</span>}
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div className="conn" aria-hidden="true">
                  <span className="nub" />
                  <span className="ln" />
                  <span className="nub" />
                </div>
              )}
            </div>
          ))}
          <div className="add-tile" aria-hidden="true">+</div>
        </div>
      </div>
    </div>
  )
}
