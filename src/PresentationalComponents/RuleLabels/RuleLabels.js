import './_RuleLabels.scss';

import {
  Tooltip,
  TooltipPosition,
} from '@patternfly/react-core/dist/js/components/Tooltip/Tooltip';

import { Label } from '@patternfly/react-core/dist/js/components/Label/Label';
import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl } from 'react-intl';
import messages from '../../Messages';

const RuleLabels = ({ intl, rule }) => (
  <React.Fragment>
    {rule.tags.search('incident') !== -1 && (
      <Tooltip
        content={intl.formatMessage(messages.incidentTooltip)}
        position={TooltipPosition.right}
      >
        <Label color="red" className="incidentLabel">
          {intl.formatMessage(messages.incident)}
        </Label>
      </Tooltip>
    )}
    {rule.rule_status === 'disabled' && (
      <Tooltip
        content={intl.formatMessage(messages.ruleIsDisabledTooltip)}
        position={TooltipPosition.right}
      >
        <Label color="gray">{intl.formatMessage(messages.disabled)}</Label>
      </Tooltip>
    )}
    {rule.rule_status === 'rhdisabled' && (
      <Tooltip
        content={intl.formatMessage(messages.ruleIsDisabledTooltip)}
        position={TooltipPosition.right}
      >
        <Label color="gray">
          {intl.formatMessage(messages.redhatDisabled)}
        </Label>
      </Tooltip>
    )}
  </React.Fragment>
);

RuleLabels.propTypes = {
  intl: PropTypes.any,
  rule: PropTypes.object,
};

export default injectIntl(RuleLabels);
