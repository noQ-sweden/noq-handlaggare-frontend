import axios from "axios";
import { bookings } from "./bookings";
import AxiosMockAdapter from "axios-mock-adapter";

export const axiosMockNoqApi = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

const noqMockApi = new AxiosMockAdapter(axiosMockNoqApi, {
  delayResponse: 0,
  onNoMatch: "throwException",
});

noqMockApi.onPost("api/login/manager/").reply((config) => {
  const data = JSON.parse(config.data);
  console.log("Data from axios");
  const login = {
    login_status: true,
    message: "Login Successful",
    groups: ["manager"],
  };

  if (data.email == "manager.user@test.nu" && data.password == "manager") {
    return [200, JSON.stringify(login)];
  } else if (
    data.email == "manager.host@test.nu" &&
    data.password == "manager"
  ) {
    login.groups = ["host"];
    return [200, JSON.stringify(login)];
  } else {
    login.login_status = false;
    login.message = "Login Failed";
    login.groups = null;
    return [200, JSON.stringify(login)];
  }
});

/*
    Below APIs are relate to booking. Booking has following possible statuses:
    pending, declined, accepted, checked_in
*/
const pendingBookingsUrl = "api/host/manager/pending";

noqMockApi.onGet(pendingBookingsUrl).reply(() => {
  var pendingBookings = bookings.filter(function (booking) {
    return booking.status.description === "pending";
  });
  return [200, JSON.stringify(pendingBookings)];
});

const urlAppoint = new RegExp(`${pendingBookingsUrl}/\\d+/appoint`);
noqMockApi.onPatch(urlAppoint).reply((config) => {
  const bookingId = config.url.substring(
    config.url.indexOf("g/") + 2,
    config.url.indexOf("/a")
  );

  const idx = bookings.findIndex((obj) => obj.id === parseInt(bookingId));
  if (idx > -1) {
    bookings[idx].status.description = "accepted";
    return [200, JSON.stringify(bookings[idx])];
  } else {
    return [200, []];
  }
});

const urlDecline = new RegExp(`${pendingBookingsUrl}/\\d+/decline`);
noqMockApi.onPatch(urlDecline).reply((config) => {
  const bookingId = config.url.substring(
    config.url.indexOf("g/") + 2,
    config.url.indexOf("/d")
  );

  const idx = bookings.findIndex((obj) => obj.id === parseInt(bookingId));
  if (idx > -1) {
    bookings[idx].status.description = "declined";
    return [200, JSON.stringify(bookings[idx])];
  } else {
    return [200, []];
  }
});

const bookingsUrl = "api/host/bookings";
const urlPending = new RegExp(`${bookingsUrl}/\\d+/setpending`);
noqMockApi.onPatch(urlPending).reply((config) => {
  const bookingId = config.url.substring(
    config.url.indexOf("s/") + 2,
    config.url.indexOf("/s")
  );

  const idx = bookings.findIndex((obj) => obj.id === parseInt(bookingId));
  if (idx > -1) {
    bookings[idx].status.description = "pending";
    return [200, JSON.stringify(bookings[idx])];
  } else {
    return [200, []];
  }
});

noqMockApi.onGet(bookingsUrl).reply(() => {
  return [200, bookings];
});
