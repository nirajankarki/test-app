import {Injectable} from '@angular/core';

@Injectable()
export class DashboardService {

  constructor() { }
  getTableLevelSummary(): any{
    return [
      {Region: 'East', TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: 'West', TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: 'North', TeamMembersCount: 14, TemporarilyUnavailableMembers: 3},
      {Region: 'South', TeamMembersCount: 17, TemporarilyUnavailableMembers: 4}
    ];
  }
}
