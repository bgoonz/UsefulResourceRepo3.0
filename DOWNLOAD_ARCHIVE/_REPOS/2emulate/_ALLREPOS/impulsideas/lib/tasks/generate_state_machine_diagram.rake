namespace :doc do
  desc "Generate a workflow graph for a model passed e.g. as 'MODEL=Order'."
  task :workflow => :environment do
    require 'workflow/draw'
    Workflow::Draw::workflow_diagram(ENV['MODEL'].constantize, path: ENV['OUT_PATH'])
  end
end
