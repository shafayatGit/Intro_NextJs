import { redirect } from 'next/navigation'
import React from 'react'

export default function UserDashboard() {
  return redirect("/dashboard/create-blog"); // Redirect to the create-blog page and this redirect will come from next/navigation and this will be a server component so we can use redirect from next/navigation
}
