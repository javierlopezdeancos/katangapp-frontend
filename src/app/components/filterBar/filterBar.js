/**
 *    Copyright 2016-today Software swcraftersclm
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';

import APP_NAMESPACE from '../../../constants/app';
import ButtonTertiaryOutline from '../buttons/btn-tertiary-outline';
import { LESS_THAN_THIRTY, LESS_THAN_FIFTEEN } from '../../../constants/filterBar';

const FilterBar = ({ onClickFirstFilter, onCLickSecondFilter }) =>
  <section className="{APP_NAMESPACE}-filter-bar">
    <ButtonTertiaryOutline label={LESS_THAN_FIFTEEN} onClick={onClickFirstFilter} />
    <ButtonTertiaryOutline label={LESS_THAN_THIRTY} onClick={onCLickSecondFilter} />
  </section>;

FilterBar.propTypes = {
  onClickFirstFilter: PropTypes.func.isRequired,
  onCLickSecondFilter: PropTypes.func.isRequired,
};

export default FilterBar;
