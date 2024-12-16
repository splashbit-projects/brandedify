import React from "react";

const ComparisonTable = () => {
  const tableHeaders = [
    "Goal",
    "SEO Optimization",
    "PPC Advertising",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Marketing Automation",
  ];

  const tableData = [
    {
      goal: "Increase Brand Awareness",
      values: [
        "<img src='/images/services/check.svg' /> Optimize for search rankings",
        "<img src='/images/services/check.svg' /> Eye-catching display ads",
        "<img src='/images/services/check.svg' /> Social campaigns for reach",
        "<img src='/images/services/check.svg' /> Engaging blog posts & media",
        "<img src='/images/services/no-check.svg' />",
        "<img src='/images/services/no-check.svg' />",
      ],
    },
    {
      goal: "Generate High-Quality Leads",
      values: [
        "<img src='/images/services/check.svg' /> Attract organic traffic",
        "<img src='/images/services/check.svg' /> Drive traffic instantly",
        "<img src='/images/services/check.svg' /> Target niche audiences",
        "<img src='/images/services/check.svg' /> Lead magnets like eBooks",
        "<img src='/images/services/check.svg' /> Nurture leads with emails",
        "<img src='/images/services/check.svg' /> Streamline lead nurturing",
      ],
    },
    {
      goal: "Improve Website Traffic",
      values: [
        "<img src='/images/services/check.svg' /> Boost organic visitors",
        "<img src='/images/services/check.svg' /> Paid campaigns",
        "<img src='/images/services/check.svg' /> Social referrals",
        "<img src='/images/services/check.svg' /> Create shareable content",
        "<img src='/images/services/no-check.svg' />",
        "<img src='/images/services/no-check.svg' />",
      ],
    },
    {
      goal: "Enhance Customer Retention",
      values: [
        "<img src='/images/services/no-check.svg' />",
        "<img src='/images/services/check.svg' /> Retargeting campaigns",
        "<img src='/images/services/check.svg' /> Community engagement",
        "<img src='/images/services/check.svg' /> Build loyalty through insights",
        "<img src='/images/services/check.svg' /> Personalize ongoing messages",
        "<img src='/images/services/check.svg' /> Automated follow-ups",
      ],
    },
    {
      goal: "Drive Sales and Conversions",
      values: [
        "<img src='/images/services/check.svg' /> Increase purchase intent",
        "<img src='/images/services/check.svg' /> Conversion-focused ads",
        "<img src='/images/services/check.svg' /> Promote product launches",
        "<img src='/images/services/check.svg' /> Inform purchase decisions",
        "<img src='/images/services/check.svg' /> Close deals through email",
        "<img src='/images/services/check.svg' /> Automate conversion workflows",
      ],
    },
  ];

  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td style={{ fontWeight: "bold" }}>{row.goal}</td>
            {row.values.map((value, valueIndex) => (
              <td key={valueIndex}>
                <span dangerouslySetInnerHTML={{ __html: value }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
