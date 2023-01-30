// import { expect } from '@playwright/test';
import {test, expect} from '@playwright/test';

const USER = 'imkiran99';
const REPO = 'testExampless1';

// test('should create a bug report', async ({ request }) => {
//   const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
//     data: {
//       title: '[Bug] report 1',
//       body: 'Bug description',
//     }
//   });
//   expect(newIssue.ok()).toBeTruthy();

//   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Bug] report 1',
//     body: 'Bug description'
//   }));
// });

// test('should create a feature request', async ({ request }) => {
//   const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
//     data: {
//       title: '[Feature] request 1',
//       body: 'Feature description',
//     }
//   });
//   expect(newIssue.ok()).toBeTruthy();

//   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Feature] request 1',
//     body: 'Feature description'
//   }));

  
// });

// test("get data", async ({ request }) => {
//     // Create a new repository
//     // const response = await request.get('/user/repos', {
//     //   data: {
//     //     name: REPO
//     //   }
//     // });
//     // // expect(response.ok()).toBeTruthy();
//     // console.log(response.body.toString());

//     const response = await request.post('/user/repos', {
//       data: {
//         name: REPO
//       }
//     });
//     console.log(">>>"+response.body.toString())
//     expect(response.ok()).toBeTruthy();
//   });

  // test("delete repo",async ({ request }) => {
  //   // Delete the repository
  //   const response = await request.delete(`/repos/${USER}/${REPO}`);
  //   expect(response.ok()).toBeTruthy();
  // });

  test("get repo details",async ({request}) => {

    const response = await request.get(`/users/${USER}/repos`)

    console.log(">>REPO DETAILS ARE  "+ response.json.toString())
  })
  })